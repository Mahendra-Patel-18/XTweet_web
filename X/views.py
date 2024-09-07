from django.shortcuts import render
from X.models import XTweet
from .forms import xtweetForm
from django.shortcuts import get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from .forms import xtweetForm, UserRegistrationForm
from django.contrib.auth import login
from django.contrib.auth.models import User
from .models import XTweet

# Create your views here.
def index(request):
    return render(request, 'index.html')

@login_required
def xtweet_list(request):
    xtweets = XTweet.objects.all().order_by('-created_at')
    return render(request, 'xtweet_list.html', {
        'xtweets': xtweets,
        'current_page': 'xtweet_list', })

@login_required
def xtweet_create(request):
    if request.method == "POST":
        form = xtweetForm(request.POST, request.FILES)
        if form.is_valid():
            xtweet = form.save(commit=False)
            xtweet.user = request.user
            xtweet.save()
            return redirect('xtweet_list')
        else:
            # Render the form with errors if the form is not valid
            return render(request, 'xtweet_form.html', {'form': form})
    else:
        form = xtweetForm()
        return render(request, 'xtweet_form.html', {'form': form})
    
@login_required    
def xtweet_edit(request, xtweet_id):
    # Correct usage of get_object_or_404
    xtweet = get_object_or_404(XTweet, pk=xtweet_id, user=request.user)  

    if request.method == "POST":
        form = xtweetForm(request.POST, request.FILES, instance=xtweet)  # Corrected typo to 'FILES'
        if form.is_valid():  # Ensure the form is valid before saving
            xtweet = form.save(commit=False)
            xtweet.user = request.user
            xtweet.save()
            return redirect('xtweet_list')
    else:
        form = xtweetForm(instance=xtweet)
        
    return render(request, 'xtweet_form.html', {'form': form})

@login_required
def xtweet_delete(request, xtweet_id):
    xtweet = get_object_or_404(XTweet, pk=xtweet_id, user=request.user)  
    if request.method == "POST":
        xtweet.delete()
        return redirect('xtweet_list')
    return render(request, 'xtweet_confirm.delete.html', {'xtweet': xtweet})


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password1'])
            user.save()
            login(request, user)
            return redirect('xtweet_list')
        pass
    else:
        form = UserRegistrationForm()
    return render(request, 'registration/register.html', {'form': form})


def search_results(request):
    query = request.GET.get('q')
    result = []
    tweets = []

    if query:
        result = User.objects.filter(username__icontains=query)
        tweets = XTweet.objects.filter(user__username__icontains=query).order_by('-created_at')

    return render(request, 'search.html', {'result': result, 'tweets': tweets})