---
type: method
interface: IFeatureManager
member: InsertStructuralWeldment2
returns: Feature
parameters:
  -
    name: Path
    type: System.String
    description: Path, filename, and name of the type of structural member to insert
  -
    name: EndCond
    type: System.Int32
    description: End condition as defined in swSolidworksWeldmentEndCondOptions_e
  -
    name: Angle
    type: System.Double
    description: Angle of rotation of the sketch about the sketch segment
  -
    name: Merge
    type: System.Boolean
    description: True to merge the bodies of the arc segments to the adjacent bodies, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertStructuralWeldment3
  - IStructuralMemberFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - structural
  - member
  - weldments
  - members
  - istructuralmemberfeaturedata
  - insertstructuralweldment2
  - ifeaturemanager
  - manager
  - insert
  - weldment2
  - path
  - string
  - end
  - cond
  - int32
  - angle
  - double
  - merge
  - boolean
---

# IFeatureManager.InsertStructuralWeldment2

Obsolete. Superseded by IFeatureManager::InsertStructuralWeldment3.

## Signature

```csharp
Feature InsertStructuralWeldment2( 
   System.String
Path
,
   System.Int32
EndCond
,
   System.Double
Angle
,
   System.Boolean
Merge
)
```
## Parameters

- `Path` (System.String): Path, filename, and name of the type of structural member to insert
- `EndCond` (System.Int32): End condition as defined in swSolidworksWeldmentEndCondOptions_e
- `Angle` (System.Double): Angle of rotation of the sketch about the sketch segment
- `Merge` (System.Boolean): True to merge the bodies of the arc segments to the adjacent bodies, false to not

## Return Value

Pointer to the IFeature object

## See Also

- `IFeatureManager.InsertStructuralWeldment3`
- `IStructuralMemberFeatureData`