---
type: property
interface: IDimension
member: DimensionLineDirection
returns: MathVector
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDimension.ExtensionLineDirection
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - dimensionlinedirection
  - line
  - direction
  - math
  - vector
readonly: null
---

# IDimension.DimensionLineDirection

Gets or sets the direction of this dimension line.

## Signature

```csharp
MathVector DimensionLineDirection {get; set;}
```
## Parameters

None.

## Return Value

Pointer to the IMathVector object

## Remarks

This method only supports feature dimensions.

## See Also

- `IDimension.ExtensionLineDirection`