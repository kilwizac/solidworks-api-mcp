---
type: property
interface: IRefPlaneFeatureData
member: AutoSize
returns: System.Boolean
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
  - autosize
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - auto
  - size
  - boolean
readonly: null
---

# IRefPlaneFeatureData.AutoSize

Gets or sets whether to automatically size the reference plane feature to either the geometry on which it is created or to the bounding box of the model geometry.

## Signature

```csharp
System.Boolean AutoSize {get; set;}
```
## Parameters

None.

## Return Value

True to automatically size the reference plane, false to not

## Remarks

IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.

## See Also

- `IRefPlaneFeatureData.UseNormalPlane`