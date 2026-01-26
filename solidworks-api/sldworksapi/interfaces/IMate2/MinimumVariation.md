---
type: property
interface: IMate2
member: MinimumVariation
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMate2.DisplayDimension2
  - IMate2.MaximumVariation
keywords:
  - minimumvariation
  - imate2
  - mate2
  - minimum
  - variation
  - double
  - edit
  - mate
  - vba
  - definition
readonly: true
---

# IMate2.MinimumVariation

Gets the minimum variation, in meters or radians, for the dimension of this distance or angle mate.

## Signature

```csharp
System.Double MinimumVariation {get;}
```
## Parameters

None.

## Return Value

Minimum variation for the dimension of this mate

## Remarks

This property is valid only for
IMate2::Type
:
swMateType_e.swMateANGLE
- or -
swMateType_e.swMateDISTANCE
For distance and angle mates:
Minimum_variation
=
minimum_value - dimension_value

## Examples

- Edit Mate (VBA) (Edit_Mate_Example_VB.htm)
- Get Mate Definition (VBA) (Get_Mate_Definition_Example_VB.htm)

## See Also

- `IMate2.DisplayDimension2`
- `IMate2.MaximumVariation`