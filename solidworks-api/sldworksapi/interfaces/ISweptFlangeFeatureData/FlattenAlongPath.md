---
type: property
interface: ISweptFlangeFeatureData
member: FlattenAlongPath
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - flattenalongpath
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - flatten
  - along
  - path
  - boolean
readonly: null
---

# ISweptFlangeFeatureData.FlattenAlongPath

Gets or sets whether to flatten the flange profile along the sweep path of this swept flange feature.

## Signature

```csharp
System.Boolean FlattenAlongPath {get; set;}
```
## Parameters

None.

## Return Value

True to flatten the profile along the sweep path, false to not

## Remarks

This property is valid only when not creating the swept flange on an existing sheet metal feature.
If this property is true, then you can also specify
ISweptFlangeFeatureData::MaterialInside
.
If this property is:
True, then when the model is flattened the
profile
flattens and is rotated parallel to the plane of the path. The
path
is not flattened, and the result is a the shape of the path.
False, then when the model is flattened the profile flattens and is rotated perpendicular to the plane of the path. The path is flattened, and the result is a rectangular shape.

## Examples

- ISweptFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweptFlangeFeatureData)