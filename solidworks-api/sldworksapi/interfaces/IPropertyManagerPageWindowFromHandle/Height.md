---
type: property
interface: IPropertyManagerPageWindowFromHandle
member: Height
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - height
  - ipropertymanagerpagewindowfromhandle
  - manager
  - page
  - window
  - handle
  - int32
readonly: null
---

# IPropertyManagerPageWindowFromHandle.Height

Gets or sets the height of this .NET control.

## Signature

```csharp
System.Int32 Height {get; set;}
```
## Parameters

None.

## Return Value

Height of the control

## Remarks

This property only applies to some .NET controls.
The height is in dialog-box units. You can convert these values to screen units (pixels) by using the Windows MapDialogRect function.

## Examples

- IPropertyManagerPageWindowFromHandle (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPageWindowFromHandle)