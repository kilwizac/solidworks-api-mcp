---
type: property
interface: IDimension
member: ExtensionLineDirection
returns: MathVector
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDimension.DimensionLineDirection
keywords:
  - dimension
  - see
  - also
  - idimension
  - extension
  - lines
  - extensionlinedirection
  - line
  - direction
  - math
  - vector
  - vba
readonly: null
---

# IDimension.ExtensionLineDirection

Gets or sets the direction of the extension line.

## Signature

```csharp
MathVector ExtensionLineDirection {get; set;}
```
## Parameters

None.

## Return Value

Pointer to the IMathVector object

## Remarks

This method only supports feature dimensions. Additionally, it returns non-0 vector for feature dimensions (
IDimension::GetFeatureOwner
) and 0 vector for radial and chamfer dimensions.

## Examples

- Get Extension Line Direction (VBA) (Get_Extension_Line_Direction_Example_VB.htm)

## See Also

- `IDimension.DimensionLineDirection`