---
type: method
interface: IAssemblyDoc
member: InsertNewPart2
returns: System.Int32
parameters:
  -
    name: FilePathIn
    type: System.String
    description: Path and filename for the new part
  -
    name: Face_or_Plane_to_select
    type: System.Object
    description: Face or reference plane where to insert the new part
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - parts
  - ui
related:
  - IPartDoc
keywords:
  - parts
  - see
  - also
  - ipartdoc
  - assemblies
  - insertnewpart2
  - iassemblydoc
  - assembly
  - doc
  - insert
  - new
  - part2
  - file
  - path
  - string
  - face
  - plane
  - select
  - object
  - int32
  - join
  - feature
  - vb
  - net
  - vba
---

# IAssemblyDoc.InsertNewPart2

Inserts a new part on the specified face or plane.

## Signature

```csharp
System.Int32 InsertNewPart2( 
   System.String
FilePathIn
,
   System.Object
Face_or_Plane_to_select
)
```
## Parameters

- `FilePathIn` (System.String): Path and filename for the new part
- `Face_or_Plane_to_select` (System.Object): Face or reference plane where to insert the new part

## Return Value

Error code as defined by swInsertNewPartErrorCode_e

## Remarks

The Face_or_Plane_to_select argument can be a
face
or
reference plane
, which means that you have to call
IFeature::GetSpecificFeature2
first.

## Examples

- Insert Join Feature (C#) (Insert_Join_Feature_Example_CSharp.htm)
- Insert Join Feature (VB.NET) (Insert_Join_Feature_Example_VBNET.htm)
- Insert Join Feature (VBA) (Insert_Join_Feature_Example_VB.htm)

## See Also

- `IPartDoc`