---
type: method
interface: IPropertyManagerPageSlider
member: GetRange
returns: void
parameters:
  -
    name: Min
    type: System.Int32
    description: Minimum range of slider
  -
    name: Max
    type: System.Int32
    description: Maximum range of slider
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - getrange
  - ipropertymanagerpageslider
  - manager
  - page
  - slider
  - range
  - min
  - int32
  - max
  - void
---

# IPropertyManagerPageSlider.GetRange

Gets the range of the slider.

## Signature

```csharp
void GetRange( 
   out System.Int32
Min
,
   out System.Int32
Max
)
```
## Parameters

- `Min` (System.Int32): Minimum range of slider
- `Max` (System.Int32): Maximum range of slider

## Return Value

Unknown.

## Remarks

Use
IPropertyManagerPageSlider::SetRange
to set the range of the slider.