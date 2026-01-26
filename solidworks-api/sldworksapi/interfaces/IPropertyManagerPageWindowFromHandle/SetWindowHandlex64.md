---
type: method
interface: IPropertyManagerPageWindowFromHandle
member: SetWindowHandlex64
returns: System.Boolean
parameters:
  -
    name: WindowHandle
    type: System.Int64
    description: 64-bit handle of the .NET control
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setwindowhandlex64
  - ipropertymanagerpagewindowfromhandle
  - manager
  - page
  - window
  - handle
  - handlex64
  - int64
  - boolean
---

# IPropertyManagerPageWindowFromHandle.SetWindowHandlex64

Sets the handle of this .NET control on 64-bit machines.

## Signature

```csharp
System.Boolean SetWindowHandlex64( 
   System.Int64
WindowHandle
)
```
## Parameters

- `WindowHandle` (System.Int64): 64-bit handle of the .NET control

## Return Value

True if handle is set, false if not

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software
.
You must call this method to initialize the .NET control handle whenever you call
IPropertyManagerPage2::Show2
, because .NET control handles are destroyed with their forms when the PropertyManager page closes.

## Examples

- IPropertyManagerPageWindowFromHandle (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPageWindowFromHandle)