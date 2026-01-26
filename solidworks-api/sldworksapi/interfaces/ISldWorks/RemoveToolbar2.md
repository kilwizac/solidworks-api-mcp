---
type: method
interface: ISldWorks
member: RemoveToolbar2
returns: System.Boolean
parameters:
  -
    name: Cookie
    type: System.Int32
    description: Resource ID of the toolbar; this is the same cookie that you specified in ISwAddin::ConnectToSW
  -
    name: ToolbarId
    type: System.Int32
    description: Toolbar ID
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.DragToolbarButton
  - ISldWorks.HideToolbar2
keywords:
  - toolbars
  - removetoolbar2
  - isldworks
  - sld
  - works
  - remove
  - toolbar2
  - cookie
  - int32
  - toolbar
  - id
  - boolean
---

# ISldWorks.RemoveToolbar2

Removes a toolbar created with ISldWorks::AddToolbar5.

## Signature

```csharp
System.Boolean RemoveToolbar2( 
   System.Int32
Cookie
,
   System.Int32
ToolbarId
)
```
## Parameters

- `Cookie` (System.Int32): Resource ID of the toolbar; this is the same cookie that you specified in ISwAddin::ConnectToSW
- `ToolbarId` (System.Int32): Toolbar ID

## Return Value

True if the toolbar is removed, false if not

## Remarks

If the SOLIDWORKS Design application is exiting and your application is still added-in, then you should not call this method. You should, however, clean up all other items such as the Cbitmap objects, which allows your toolbar to get reloaded in the same position next time you start the SOLIDWORKS Design application.

## See Also

- `ISldWorks.DragToolbarButton`
- `ISldWorks.HideToolbar2`