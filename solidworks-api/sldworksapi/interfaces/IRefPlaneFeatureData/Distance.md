---
type: property
interface: IRefPlaneFeatureData
member: Distance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - planes
  - see
  - also
  - irefplane
  - offset
  - distance
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - double
  - modify
  - editing
  - its
  - definition
  - vba
readonly: null
---

# IRefPlaneFeatureData.Distance

Gets or sets the distance, in meters, to offset the reference plane feature.

## Signature

```csharp
System.Double Distance {get; set;}
```
## Parameters

None.

## Return Value

Distance, in radians, to offset the reference plane

## Remarks

IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.

## Examples

- Modify Plane by Editing Its Definition (VBA) (Modify_Plane_by_Editing_Its_Definition_Example_VB.htm)