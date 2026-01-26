---
type: property
interface: IRefPlaneFeatureData
member: OriginOnCurve
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - originoncurve
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - origin
  - curve
  - boolean
readonly: null
---

# IRefPlaneFeatureData.OriginOnCurve

Gets or sets whether to place the origin on the curve for this reference plane feature.

## Signature

```csharp
System.Boolean OriginOnCurve {get; set;}
```
## Parameters

None.

## Return Value

True to place the origin on the curve, false to place the origin on the vertex or point

## Remarks

IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.