---
type: method
interface: IModelViewManager
member: DisplayWindowFromHandle
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: User-defined label that appears on the tab
  -
    name: WindowHandle
    type: System.Int32
    description: Handle of the .NET control
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
  - IModelViewManager.CreateFeatureMgrWindowFromHandle
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
  - displaywindowfromhandle
  - imodelviewmanager
  - model
  - view
  - manager
  - display
  - window
  - handle
  - name
  - string
  - int32
  - split
  - boolean
---

# IModelViewManager.DisplayWindowFromHandle

Displays a .NET control in this model view.

## Signature

```csharp
System.Boolean DisplayWindowFromHandle( 
   System.String
Name
,
   System.Int32
WindowHandle
,
   System.Boolean
SplitWindow
)
```
## Parameters

- `Name` (System.String): User-defined label that appears on the tab
- `WindowHandle` (System.Int32): Handle of the .NET control
- `SplitWindow` (System.Boolean): True to add a splitter window, false to not

## Return Value

True if .NET control is created, false if not

## Remarks

If your application must be x64 compatible, then use
IModelViewManager::DisplayWindowFromHandlex64
.

## See Also

- `IModelViewManager.CreateFeatureMgrWindowFromHandle`