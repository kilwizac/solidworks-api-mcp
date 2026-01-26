---
type: method
interface: IModelViewManager
member: DisplayWindowFromHandlex64
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: User-defined label that appears on the tab
  -
    name: WindowHandle
    type: System.Int64
    description: 64-bit handle of the .NET control
  -
    name: SplitWindow
    type: System.Boolean
    description: True to add a splitter window, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelViewManager.CreateFeatureMgrWindowFromHandlex64
keywords:
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - net
  - controls
  - displaywindowfromhandlex64
  - imodelviewmanager
  - model
  - view
  - manager
  - display
  - window
  - handlex64
  - name
  - string
  - handle
  - int64
  - split
  - boolean
  - add
  - solidworks
  - using
  - vb
---

# IModelViewManager.DisplayWindowFromHandlex64

Displays a .NET control in this model view on 64-bit machines.

## Signature

```csharp
System.Boolean DisplayWindowFromHandlex64( 
   System.String
Name
,
   System.Int64
WindowHandle
,
   System.Boolean
SplitWindow
)
```
## Parameters

- `Name` (System.String): User-defined label that appears on the tab
- `WindowHandle` (System.Int64): 64-bit handle of the .NET control
- `SplitWindow` (System.Boolean): True to add a splitter window, false to not

## Return Value

True if .NET control is created, false if not

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS software.

## Examples

- Add .NET Controls to SOLIDWORKS using an Add-in (C#) (Add_.NET_Controls_to_SOLIDWORKS_Using_an_Add-in_Example_CSharp.htm)
- Add .NET Controls to SOLIDWORKS using an Add-in (VB.NET) (Add_.NET_Controls_to_SolidWorks_Using_an_Add-in_Example_VBNET.htm)

## See Also

- `IModelViewManager.CreateFeatureMgrWindowFromHandlex64`