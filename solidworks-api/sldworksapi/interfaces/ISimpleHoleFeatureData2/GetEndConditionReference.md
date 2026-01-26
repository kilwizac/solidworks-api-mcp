---
type: method
interface: ISimpleHoleFeatureData2
member: GetEndConditionReference
returns: System.Object
parameters:
  -
    name: ReferenceType
    type: System.Int32
    description: Reference type as defined in swSelectionReferenceTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleHoleFeatureData2.Face
  - ISimpleHoleFeatureData2.IFace
  - ISimpleHoleFeatureData2.IVertex
  - ISimpleHoleFeatureData2.SetEndConditionReference
  - ISimpleHoleFeatureData2.Type
  - ISimpleHoleFeatureData2.Vertex
keywords:
  - getendconditionreference
  - isimpleholefeaturedata2
  - simple
  - hole
  - feature
  - data2
  - end
  - condition
  - reference
  - type
  - int32
  - object
---

# ISimpleHoleFeatureData2.GetEndConditionReference

Gets the reference entity that defines the end condition for this simple hole feature.

## Signature

```csharp
System.Object GetEndConditionReference( 
   out System.Int32
ReferenceType
)
```
## Parameters

- `ReferenceType` (System.Int32): Reference type as defined in swSelectionReferenceTypes_e

## Return Value

Reference entity

## Remarks

See
Accessing Selections that Define Features
for additional details.

## Examples

- ISimpleHoleFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleHoleFeatureData2)

## See Also

- `ISimpleHoleFeatureData2.Face`
- `ISimpleHoleFeatureData2.IFace`
- `ISimpleHoleFeatureData2.IVertex`
- `ISimpleHoleFeatureData2.SetEndConditionReference`
- `ISimpleHoleFeatureData2.Type`
- `ISimpleHoleFeatureData2.Vertex`