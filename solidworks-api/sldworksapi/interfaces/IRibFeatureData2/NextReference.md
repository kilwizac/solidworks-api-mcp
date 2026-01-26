---
type: method
interface: IRibFeatureData2
member: NextReference
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - ribs
  - see
  - also
  - iribfeaturedata2
  - drafts
  - nextreference
  - rib
  - feature
  - data2
  - next
  - reference
  - int32
---

# IRibFeatureData2.NextReference

Cycles through the possible sketch entities that can be used to define the draft, if it is used, for ribs with multiple contours.

## Signature

```csharp
System.Int32 NextReference()
```
## Parameters

None.

## Return Value

Index of the entity that is used

## Remarks

This method cycles through the entities. It starts at the beginning again once the last entity is reached.