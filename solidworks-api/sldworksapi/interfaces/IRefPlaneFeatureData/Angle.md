---
type: property
interface: IRefPlaneFeatureData
member: Angle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRefPlaneFeatureData.UseNormalPlane
keywords:
  - planes
  - see
  - also
  - irefplane
  - angle
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - double
readonly: null
---

# IRefPlaneFeatureData.Angle

Gets or sets the angle of the reference plane feature.

## Signature

```csharp
System.Double Angle {get; set;}
```
## Parameters

None.

## Return Value

Angle in radians

## Remarks

IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.

## See Also

- `IRefPlaneFeatureData.UseNormalPlane`