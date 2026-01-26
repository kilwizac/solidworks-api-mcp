---
type: property
interface: IMateEntity2
member: ReferenceComponent
returns: Component2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMateEntity2.Reference
  - IMateEntity2.ReferenceType2
keywords:
  - reference
  - component
  - mates
  - see
  - also
  - imate2
  - references
  - mate
  - imatereference
  - referencecomponent
  - imateentity2
  - entity2
  - component2
  - edit
  - vba
  - definition
  - entities
  - vb
  - net
readonly: true
---

# IMateEntity2.ReferenceComponent

Gets the reference component for this mate entity.

## Signature

```csharp
Component2 ReferenceComponent {get;}
```
## Parameters

None.

## Return Value

Component

## Remarks

The component instance tree of a subassembly is not loaded because a subassembly does not have a view of its own. Thus, this property returns Nothing or null if the
Inplace
mate is in a subassembly.

## Examples

- Edit Mate (VBA) (Edit_Mate_Example_VB.htm)
- Get Mate Definition (VBA) (Get_Mate_Definition_Example_VB.htm)
- Get Mates and Mate Entities (C#) (Get_Mates_and_Mate_Entities_Example_CSharp.htm)
- Get Mates and Mate Entities (VB.NET) (Get_Mates_and_Mate_Entities_Example_VBNET.htm)
- Get Mates and Mate Entities (VBA) (Get_Mates_and_Mate_Entities_Example_VB.htm)

## See Also

- `IMateEntity2.Reference`
- `IMateEntity2.ReferenceType2`