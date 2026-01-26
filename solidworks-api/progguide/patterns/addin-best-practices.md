---
type: pattern
title: Add-in Best Practices
keywords:
  - addin
  - add
  - standalone
  - application
categories:
  - documents
related: []
---

# Add-in Best Practices

## SOLIDWORKS API Standalone and Add-in Applications Overview

- You can use any programming language that supports COM to create SOLIDWORKS standalone API ( .exe files) and add-in ( .dll files) applications . The programming languages most commonly used are:
- Visual Basic .NET (VB.NET)
- Visual C++/CLI
- Visual C# .NET
- Visual C++ 6.0
- Please note that when programmatically creating a new SOLIDWORKS session, add-ins do not load even though Start Up is selected in the SOLIDWORKS Add-in dialog. You have to call ISldWorks::LoadAddIn to load your add-ins.

## Types of SOLIDWORKS API Applications Overview

- Use any of the following programming tools, languages, and applications to develop SOLIDWORKS API applications:
- SOLIDWORKS macros
- Programming languages to develop standalone and add-in applications
- Other Microsoft VBA-enabled applications

## Visual C# .NET Standalone and Add-in Applications

- To create an instance of SOLIDWORKS, your executable project should contain lines of code similar to the following:
- Additionally, you must have added references to the SOLIDWORKS type libraries .
- You can create a Visual C# .NET DLL add-in using the SOLIDWORKS C# Add-in Template included in the SOLIDWORKS API SDK . See SOLIDWORKS C# Add-in Template for details.

### Code

```csharp
static void Main(string[] args)
{
    SldWorks.SldWorks swApp;
    swApp = new SldWorks.SldWorks();
    swApp.ExitApp();
    swApp = null;
}
```

## Visual Basic .NET Standalone and Add-in Applications

- To create an instance of SOLIDWORKS, your project should contain lines of code similar to the following:
- Additionally, you must have added references to the SOLIDWORKS type libraries .
- You can create a Visual Basic .NET DLL add-in using the SOLIDWORKS VB.NET Add-in Template included in the SOLIDWORKS API SDK . See SOLIDWORKS VB.NET Add-in Template for details.

### Code

```vb
Sub Main
    Dim swApp As SldWorks.SldWorks
    swApp = New SldWorks.SldWorks()
    swApp.ExitApp
    swApp = Nothing
End Sub
```

## Visual C++/CLI Standalone and Add-in Applications

- To create an instance of SOLIDWORKS , your executable project should contain lines of code similar to the following:
- You can create a Visual C++/CLI DLL add-in using the SOLIDWORKS COM Add-In Wizard included in the SOLIDWORKS API SDK . See SOLIDWORKS COM Addin Wizard for details.

### Code

```cpp
//Import the SOLIDWORKS type library
#import "sldworks.tlb" raw_interfaces_only, raw_native_types, no_namespace, named_guids
//Import the SOLIDWORKS constant type library
#import "swconst.tlb" raw_interfaces_only, raw_native_types, no_namespace, named_guids
 
int _tmain(int argc, _TCHAR* argv[])
{
//Initialize COM
CoInitialize(NULL);
 
//Use ATL smart pointers
CComPtr<ISldWorks> swApp;
 
//Create an instance of SOLIDWORKS
HRESULT hres = swApp.CoCreateInstance(__uuidof(SldWorks), NULL, CLSCTX_LOCAL_SERVER);
.
. //Your code
.
//Shut down SOLIDWORKS
swApp->ExitApp();
 
// Release COM reference
swApp = NULL;
 
//Uninitialize COM
CoUninitialize();
 
return 0;
}
```
