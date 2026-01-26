---
type: property
interface: ISweptFlangeFeatureData
member: CylindricalOrConicalEdge
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - cylindricalorconicaledge
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - cylindrical
  - conical
  - edge
  - object
readonly: null
---

# ISweptFlangeFeatureData.CylindricalOrConicalEdge

Gets or sets the linear sketch entity to propagate to the flat pattern of this cylindrical or conical swept flange feature.

## Signature

```csharp
System.Object CylindricalOrConicalEdge {get; set;}
```
## Parameters

None.

## Return Value

Linear sketch entity

## Remarks

This property is valid only:
for cylindrical or conical swept flanges
- and -
for
sweep paths
that are sketches,
- and -
when not creating the swept flange on an existing sheet metal feature.
For more information, read the
SOLIDWORKS Help > Sheet Metal > Using Sheet Metal Tools > Swept Flange > Creating a Conical Body with a Swept Flange
topic.