---
type: pattern
title: Connect to SOLIDWORKS Message Pump to Handle Keystrokes and Accelerator Keys (VB.NET)
keywords:
  - connect
  - solidworks
  - message
  - pump
  - handle
  - keystrokes
  - accelerator
  - keys
  - vb
  - net
categories:
  - documents
related: []
---

# Connect to SOLIDWORKS Message Pump to Handle Keystrokes and Accelerator Keys (VB.NET)

This example shows how to connect to a SOLIDWORKS message pump by creating, installing, and uninstalling a hook for a modeless dialog box or PropertyManager page for intercepting keystrokes and handling accelerator keys.

## Code

```vb
' Create, install, and uninstall a hook for a modeless dialog box
' or PropertyManager page for intercepting keystrokes and
' handling accelerator keys
Imports System
Imports System.Runtime.InteropServices
Namespace WinHooks
    Public Class HookEventArgs
        Inherits EventArgs
        Public HookCode As Integer ' Hook code
        Public wParam As IntPtr ' WPARAM argument
        Public lParam As IntPtr ' LPARAM argument
    End Class
    ' Hook Types
    Public Enum HookType
        WH_JOURNALRECORD = 0
        WH_JOURNALPLAYBACK = 1
        WH_KEYBOARD = 2
        WH_GETMESSAGE = 3
        WH_CALLWNDPROC = 4
        WH_CBT = 5
        WH_SYSMSGFILTER = 6
        WH_MOUSE = 7
        WH_HARDWARE = 8
        WH_DEBUG = 9
        WH_SHELL = 10
        WH_FOREGROUNDIDLE = 11
        WH_CALLWNDPROCRET = 12
        WH_KEYBOARD_LL = 13
        WH_MOUSE_LL = 14
    End Enum
    Public Class LocalWindowsHook
        ' Filter function delegate
        Public Delegate Function HookProc(ByVal code As Integer, ByVal wParam As IntPtr, ByVal lParam As IntPtr) As Integer
        ' Internal properties
        Protected m_hhook As IntPtr = IntPtr.Zero
        Protected m_filterFunc As HookProc = Nothing
        Protected m_hookType As HookType
        ' Event delegate
        Public Delegate Sub HookEventHandler(ByVal sender As Object, ByVal e As HookEventArgs)
        ' Event: HookInvoked
        Public Event HookInvoked As HookEventHandler
        Protected Sub OnHookInvoked(ByVal e As HookEventArgs)
            RaiseEvent HookInvoked(Me, e)
        End Sub
        ' Class constructor(s)
        Public Sub New(ByVal hook As HookType)
            m_hookType = hook
            m_filterFunc = New HookProc(AddressOf Me.CoreHookProc)
        End Sub
        Public Sub New(ByVal hook As HookType, ByVal func As HookProc)
            m_hookType = hook
            m_filterFunc = func
        End Sub
        ' Default filter function
        Public Function CoreHookProc(ByVal code As Integer, ByVal wParam As IntPtr, ByVal lParam As IntPtr) As Integer
            If code < 0 Then Return CallNextHookEx(m_hhook, code, wParam, lParam)
            ' Let clients determine what to do
            Dim e As HookEventArgs = New HookEventArgs()
            e.HookCode = code
            e.wParam = wParam
            e.lParam = lParam
            OnHookInvoked(e)
            ' Yield to the next hook in the chain
            CoreHookProc = CallNextHookEx(m_hhook, code, wParam, lParam)
        End Function
        ' Install the hook
        Public Sub Install()
            m_hhook = SetWindowsHookEx(m_hookType, m_filterFunc, IntPtr.Zero, AppDomain.GetCurrentThreadId())
        End Sub
        ' Uninstall the hook
        Public Sub Uninstall()
            UnhookWindowsHookEx(m_hhook)
        End Sub
        ' Win32 Imports
        ' Win32: SetWindowsHookEx()
        Declare Function SetWindowsHookEx Lib "user32" Alias "SetWindowsHookExA" (ByVal code As HookType, ByVal func As HookProc, ByVal hInstance As IntPtr, ByVal threadID As Integer) As Integer
        ' Win32: UnhookWindowsHookEx()
        Declare Function UnhookWindowsHookEx Lib "user32" (ByVal hhook As IntPtr) As Integer
        ' Win32: CallNextHookEx()
        Declare Function CallNextHookEx Lib "user32" (ByVal hhook As IntPtr, ByVal code As Integer, ByVal wParam As IntPtr, ByVal lParam As IntPtr) As Integer
    End Class
End Namespace
```
