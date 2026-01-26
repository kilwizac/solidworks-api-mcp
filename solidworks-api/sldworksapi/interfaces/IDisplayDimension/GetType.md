---
type: method
interface: IDisplayDimension
member: GetType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.Diametric
  - IDisplayDimension.Type2
keywords:
  - gettype
  - idisplaydimension
  - display
  - dimension
  - type
  - int32
---

# IDisplayDimension.GetType

Obsolete. Superseded by IDisplayDimension::Type2.

## Signature

```csharp
System.Int32 GetType()
```
## Parameters

None.

## Return Value

Dimension type as defined in swDimensionType_e

## Remarks

Radial and diametric dimensions both return swRadialDimension. To determine how this radial dimension is currently displayed, use
IDisplayDimension::Diametric
and
IDisplayDimension::DisplayAsLinear
.

## See Also

- `IDisplayDimension.Diametric`
- `IDisplayDimension.Type2`