---
type: method
interface: IModelDoc2
member: InsertGtol
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.IInsertGtol
keywords:
  - geometric
  - tolerancing
  - see
  - also
  - igtol
  - insert
  - insertgtol
  - imodeldoc2
  - model
  - doc2
  - gtol
  - object
  - vb
  - net
  - vba
---

# IModelDoc2.InsertGtol

Creates a new geometric tolerance symbol (GTol) in this document.

## Signature

```csharp
System.Object InsertGtol()
```
## Parameters

None.

## Return Value

Newly created GTol

## Remarks

The leader attachment point for the newly created GTol object comes from the selection made before calling this method. The initial location of the symbol is near the selection location. If there is no selection, then the GTol does not have a leader, is free standing, and is initially at the origin of the model or drawing.
This method creates an empty symbol. To fill in the text and symbols of this GTol, use the pointer
returned by this method to access the various get and set methods of the
IGTol
interface, such as
IGtol::SetFrameSymbols2
and
IGtol::SetFrameValues
. Use
IGtol::GetAnnotation
to retrieve the
IAnnotation
object.

## Examples

- Insert GTol (C#) (Insert_GTol_Example_CSharp.htm)
- Insert GTol (VB.NET) (Insert_GTol_Example_VBNET.htm)
- Insert GTol (VBA) (Insert_GTol_Example_VB.htm)

## See Also

- `IModelDoc2.IInsertGtol`