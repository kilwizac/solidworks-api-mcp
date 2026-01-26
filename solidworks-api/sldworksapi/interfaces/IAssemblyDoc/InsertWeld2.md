---
type: method
interface: IAssemblyDoc
member: InsertWeld2
returns: void
parameters:
  -
    name: Type
    type: System.String
    description: Weld bead type
  -
    name: Shape
    type: System.String
    description: Surface shape
  -
    name: TopDelta
    type: System.Double
    description: Distance for the top surface delta, if appropriate
  -
    name: BottomDelta
    type: System.Double
    description: Distance for the bottom surface delta, if appropriate
  -
    name: Radius
    type: System.Double
    description: Weld radius, if appropriate
  -
    name: Part
    type: System.String
    description: Path and filename for the part used for the weld; this file is created and merged into your assembly
  -
    name: TopFaces
    type: System.Object
    description: Array of faces from which to measure the top surface delta
  -
    name: StopFace
    type: System.Object
    description: Array of faces that define the beginning and the end of the weld bead
  -
    name: ContactFaces
    type: System.Object
    description: Array of faces that are joined by the weld bead
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IWeldBead
  - IWeldmentBeadFeatureData
keywords:
  - insertweld2
  - iassemblydoc
  - assembly
  - doc
  - insert
  - weld2
  - type
  - string
  - shape
  - top
  - delta
  - double
  - bottom
  - radius
  - part
  - faces
  - object
  - stop
  - face
  - contact
  - void
---

# IAssemblyDoc.InsertWeld2

Obsolete. Do not use. Superseded by IFeatureManager::InsertCosmeticWeldBead.

## Signature

```csharp
void InsertWeld2( 
   System.String
Type
,
   System.String
Shape
,
   System.Double
TopDelta
,
   System.Double
BottomDelta
,
   System.Double
Radius
,
   System.String
Part
,
   System.Object
TopFaces
,
   System.Object
StopFace
,
   System.Object
ContactFaces
)
```
## Parameters

- `Type` (System.String): Weld bead type
- `Shape` (System.String): Surface shape
- `TopDelta` (System.Double): Distance for the top surface delta, if appropriate
- `BottomDelta` (System.Double): Distance for the bottom surface delta, if appropriate
- `Radius` (System.Double): Weld radius, if appropriate
- `Part` (System.String): Path and filename for the part used for the weld; this file is created and merged into your assembly
- `TopFaces` (System.Object): Array of faces from which to measure the top surface delta
- `StopFace` (System.Object): Array of faces that define the beginning and the end of the weld bead
- `ContactFaces` (System.Object): Array of faces that are joined by the weld bead

## Return Value

Unknown.

## Remarks

For the most up-to-date list of available types and shapes, see
C:\ProgramData\SolidWorks\SolidWorks 20
nn
\
lang
\
english\gtol.sym
.
To create a weld bead by preselecting the top, stop, and contact faces, use
IAssemblyDoc::InsertWeld
.

## See Also

- `IWeldBead`
- `IWeldmentBeadFeatureData`