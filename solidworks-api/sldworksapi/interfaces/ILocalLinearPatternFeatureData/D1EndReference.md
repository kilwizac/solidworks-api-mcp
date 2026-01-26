---
type: property
interface: ILocalLinearPatternFeatureData
member: D1EndReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalLinearPatternFeatureData.D1EndReferenceType
keywords:
  - d1endreference
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - d1
  - end
  - reference
  - object
readonly: null
---

# ILocalLinearPatternFeatureData.D1EndReference

Gets or sets the up-to reference entity in Direction 1 for this linear component pattern feature.

## Signature

```csharp
System.Object D1EndReference {get; set;}
```
## Parameters

None.

## Return Value

Pattern's up-to reference ( vertex , edge , face , or plane ) in Direction 1

## Remarks

This property is valid only if
ILocalLinearPatternFeatureData::D1EndCondition
is set to
swPatternEndCondition_e
.swPatternEndCondition_UpToReference.
To pre-select, use selection Mark = 256.
During edit of this property, if you specify an invalid entity
IFeature::ModifyDefinition
returns false and the feature does not roll back. To roll back the feature, call
IModelDoc2::ForceRebuild3
or move the rollback bar in the user interface to before and after the feature.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Linear Component Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## See Also

- `ILocalLinearPatternFeatureData.D1EndReferenceType`