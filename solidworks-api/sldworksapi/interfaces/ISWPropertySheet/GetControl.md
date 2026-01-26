---
type: property
interface: ISWPropertySheet
member: GetControl
returns: System.Object
parameters:
  -
    name: PageIndex
    type: System.Int32
    description: Index of property sheet
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - getcontrol
  - iswpropertysheet
  - isw
  - sheet
  - control
  - page
  - index
  - int32
  - object
readonly: null
---

# ISWPropertySheet.GetControl

Gets the ActiveX control on the property sheet.

## Signature

```csharp
System.Object GetControl( 
   System.Int32
PageIndex
)
```
## Parameters

- `PageIndex` (System.Int32): Index of property sheet

## Return Value

ActiveX control

## Remarks

Typically, you would call this method from the ISWPropertySheet
OnOKNotify
event handler to retrieve data from your ActiveX control.