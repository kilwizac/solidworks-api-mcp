---
type: property
interface: ILocalCircularPatternFeatureData
member: Symmetric
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - symmetric
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - boolean
readonly: null
---

# ILocalCircularPatternFeatureData.Symmetric

Gets or sets whether Direction 2 properties are symmetric with those of Direction 1 of this bidirectional circular component pattern feature.

## Signature

```csharp
System.Boolean Symmetric {get; set;}
```
## Parameters

None.

## Return Value

True if Direction 2 properties mirror Direction 1 properties, false if not

## Remarks

This property is only available when
ILocalCircularPatternFeatureData::Direction2
is true.
If this property is set to false, then you must specify:
ILocalCircularPatternFeatureData::EqualSpacing2
ILocalCircularPatternFeatureData::TotalInstances2
See
Accessing Selections that Define Features
for additional details on using this property.