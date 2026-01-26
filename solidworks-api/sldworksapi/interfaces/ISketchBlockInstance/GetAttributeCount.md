---
type: method
interface: ISketchBlockInstance
member: GetAttributeCount
returns: System.Int32
parameters: []
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
  - getattributecount
  - sketch
  - block
  - instance
  - count
  - int32
---

# ISketchBlockInstance.GetAttributeCount

Gets the number of attributes for this block instance.

## Signature

```csharp
System.Int32 GetAttributeCount()
```
## Parameters

None.

## Return Value

Number of attributes

## Remarks

Attributes are notes that have tag names and are not read-only.
Call this method before before calling
ISketchBlockInstance::IGetAttributes
to get the size of the array for that method.

## See Also

- `ISketchBlockInstance.GetAttributeValue`
- `ISketchBlockInstance.GetAttributes`
- `ISketchBlockInstance.SetAttributeValue`