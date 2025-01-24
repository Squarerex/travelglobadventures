from django.urls import path
from .views import (
    UserRegistrationView,
    ProtectedView,
    UserProfileView,
    UserLogoutView,
)
from django.contrib.auth import views as auth_views

urlpatterns = [

    path('register/', UserRegistrationView.as_view(), name='register'),
    path('protected/', ProtectedView.as_view(), name='protected_view'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
     path('logout/', auth_views.LogoutView.as_view(template_name='registration/logged_out.html'), name='logout'),
     path('logout/', UserLogoutView.as_view(), name='logout'),
    path('profile/', UserProfileView.as_view(), name='user_profile'),
    ]