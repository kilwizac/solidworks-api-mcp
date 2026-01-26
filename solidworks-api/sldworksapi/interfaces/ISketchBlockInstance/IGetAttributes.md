---
type: method
interface: ISketchBlockInstance
member: IGetAttributes
returns: Note
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of attributes
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockInstance.GetAttributeValue
  - ISketchBlockInstance.GetAttributes
  - ISketchBlockInstance.SetAttributeValue
keywords:
  - attribute
  - see
  - also
  - iattribute
  - blocks
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - attributes
  - igetattributes
  - sketch
  - block
  - instance
  - count
  - int32
  - note
---

# ISketchBlockInstance.IGetAttributes

Gets the attributes for this block instance.

## Signature

```csharp
Note IGetAttributes( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of attributes

## Return Value

in-process, unmanaged C++: Pointer to an array of notes VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Attributes are notes that have tag names and are not read-only.
Before calling this method, call
ISketchBlockInstance::GetAttributeCount
to get the value for Count.
Use
ISketchBlockInstance::GetAttributeValue
to get attribute's value, or use
ISketchBlockInstance::SetAttributeValue
to set an attribute's value.

## See Also

- `ISketchBlockInstance.GetAttributeValue`
- `ISketchBlockInstance.GetAttributes`
- `ISketchBlockInstance.SetAttributeValue`