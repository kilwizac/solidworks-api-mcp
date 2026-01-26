---
type: method
interface: IAssemblyDoc
member: InsertLoadReference
returns: MateLoadReference
parameters:
  -
    name: Mate
    type: Mate2
    description: Mate to which to add a mate load reference; if NULL passed in, then the mate must already be selected
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - mates
  - see
  - also
  - imate2
  - load
  - reference
  - insertloadreference
  - iassemblydoc
  - assembly
  - doc
  - insert
  - mate
  - mate2
  - vb
  - net
  - vba
---

# IAssemblyDoc.InsertLoadReference

Creates a mate load reference to the specified or selected mate.

## Signature

```csharp
MateLoadReference InsertLoadReference( 
   Mate2
Mate
)
```
## Parameters

- `Mate` (Mate2): Mate to which to add a mate load reference; if NULL passed in, then the mate must already be selected

## Return Value

IMateLoadReference

## Remarks

The supplemental faces for the mate load reference must be selected before using this method. SOLIDWORKS determines which components own the selected supplemental faces and matches them to the components associated with the specified or selected mate.
If the component of a selected supplemental face does not match either of the components of the mate, then that face is ignored.
This method rebuilds the FeatureManager design tree, which can be a time-consuming operation if the FeatureManage design tree is large. If using this method to add many load references at once, use
IFeatureManager::EnableFeatureTree
before and after using IAssemblyDoc::InsertLoadReference to disable and then re-enable rebuilding the FeatureManager design tree.

## Examples

- Insert Mate Load Reference (C#) (Insert_Mate_Load_Reference_Example_CSharp.htm)
- Insert Mate Load Reference (VB.NET) (Insert_Mate_Load_Reference_Example_VBNET.htm)
- Insert Mate Load Reference (VBA) (Insert_Mate_Load_Reference_Example_VB.htm)