---
type: property
interface: ISweptFlangeFeatureData
member: MaterialInside
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - materialinside
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - material
  - inside
  - boolean
readonly: null
---

# ISweptFlangeFeatureData.MaterialInside

Gets or sets whether to flatten the flange profile with material inside of this swept flange feature.

## Signature

```csharp
System.Boolean MaterialInside {get; set;}
```
## Parameters

None.

## Return Value

True to flatten the flange profile with material inside, false to not

## Remarks

This property is valid only:
if
ISweptFlangeFeatureData::FlattenAlongPath
is true,
- and -
when not creating the swept flange on an existing sheet metal feature.
The flat pattern of the model may fail for either setting of this property, depending on whether self-intersecting geometry occurs with material inside or outside. You should test your model to determine which setting of this property successfully flattens the flange
profile
.