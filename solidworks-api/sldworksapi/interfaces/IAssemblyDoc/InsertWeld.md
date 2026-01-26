---
type: method
interface: IAssemblyDoc
member: InsertWeld
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
  - insertweld
  - iassemblydoc
  - assembly
  - doc
  - insert
  - weld
  - type
  - string
  - shape
  - top
  - delta
  - double
  - bottom
  - radius
  - part
  - void
---

# IAssemblyDoc.InsertWeld

Obsolete. Do not use. Superseded by IFeatureManager::InsertCosmeticWeldBead.

## Signature

```csharp
void InsertWeld( 
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
)
```
## Parameters

- `Type` (System.String): Weld bead type
- `Shape` (System.String): Surface shape
- `TopDelta` (System.Double): Distance for the top surface delta, if appropriate
- `BottomDelta` (System.Double): Distance for the bottom surface delta, if appropriate
- `Radius` (System.Double): Weld radius, if appropriate
- `Part` (System.String): Path and filename for the part used for the weld; this file is created and merged into your assembly

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
To programmatically select the top, stop, and contact faces for the weld bead and pass them as arrays, use
IAssemblyDoc::InsertWeld2
.

## See Also

- `IWeldBead`
- `IWeldmentBeadFeatureData`