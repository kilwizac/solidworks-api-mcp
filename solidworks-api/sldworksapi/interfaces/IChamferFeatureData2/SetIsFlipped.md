---
type: method
interface: IChamferFeatureData2
member: SetIsFlipped
returns: void
parameters:
  -
    name: Entity
    type: System.Object
    description: Chamfer feature
  -
    name: Flip
    type: System.Boolean
    description: True flips the chamfer feature, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IChamferFeatureData2.GetIsFlipped
keywords:
  - setisflipped
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - flipped
  - entity
  - object
  - flip
  - boolean
  - void
---

# IChamferFeatureData2.SetIsFlipped

Gets whether the chamfer feature is flipped.

## Signature

```csharp
void SetIsFlipped( 
   System.Object
Entity
,
   System.Boolean
Flip
)
```
## Parameters

- `Entity` (System.Object): Chamfer feature
- `Flip` (System.Boolean): True flips the chamfer feature, false does not

## Return Value

Unknown.

## See Also

- `IChamferFeatureData2.GetIsFlipped`