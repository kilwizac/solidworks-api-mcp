---
type: property
interface: IAdvancedHoleElementData
member: SelectionEntity
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - selectionentity
  - iadvancedholeelementdata
  - advanced
  - hole
  - element
  - data
  - selection
  - entity
  - object
readonly: null
---

# IAdvancedHoleElementData.SelectionEntity

Gets or sets the entity used to specify the Up to Selection or Offset from Surface end condition for this Advanced Hole element.

## Signature

```csharp
System.Object SelectionEntity {get; set;}
```
## Parameters

None.

## Return Value

End condition entity

## Remarks

This property is valid only when
IAdvancedHoleElementData::EndCondition
is set to
swEndConditions_e
:
swEndCondOffsetFromSurface (end condition entity is a
face
,
surface
,
plane
,
edge
, or
vertex
)
- or -
swEndCondUpToSelection (end condition entity is a face, surface, or plane)
See
Accessing Selections that Define Features
for additional details on using this property.