---
type: method
interface: ISimpleHoleFeatureData2
member: SetEndConditionReference
returns: void
parameters:
  -
    name: PDisp
    type: System.Object
    description: Reference entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleHoleFeatureData2.Face
  - ISimpleHoleFeatureData2.GetEndConditionReference
  - ISimpleHoleFeatureData2.IFace
  - ISimpleHoleFeatureData2.IVertex
  - ISimpleHoleFeatureData2.Type
  - ISimpleHoleFeatureData2.Vertex
keywords:
  - setendconditionreference
  - isimpleholefeaturedata2
  - simple
  - hole
  - feature
  - data2
  - end
  - condition
  - reference
  - disp
  - object
  - void
---

# ISimpleHoleFeatureData2.SetEndConditionReference

Sets the reference entity that defines the end condition for this simple hole feature.

## Signature

```csharp
void SetEndConditionReference( 
   System.Object
PDisp
)
```
## Parameters

- `PDisp` (System.Object): Reference entity

## Return Value

Unknown.

## Remarks

Valid end conditions are defined in
swSelectionReferenceTypes_e
.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISimpleHoleFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleHoleFeatureData2)

## See Also

- `ISimpleHoleFeatureData2.Face`
- `ISimpleHoleFeatureData2.GetEndConditionReference`
- `ISimpleHoleFeatureData2.IFace`
- `ISimpleHoleFeatureData2.IVertex`
- `ISimpleHoleFeatureData2.Type`
- `ISimpleHoleFeatureData2.Vertex`