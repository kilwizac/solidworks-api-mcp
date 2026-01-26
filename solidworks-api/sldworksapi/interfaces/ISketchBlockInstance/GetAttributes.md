---
type: method
interface: ISketchBlockInstance
member: GetAttributes
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockInstance.GetAttributeCount
  - ISketchBlockInstance.IGetAttributes
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
  - getattributes
  - sketch
  - block
  - instance
  - object
  - information
  - vba
---

# ISketchBlockInstance.GetAttributes

Gets the attributes for this block instance.

## Signature

```csharp
System.Object GetAttributes()
```
## Parameters

None.

## Return Value

Array of attributes (see Remarks )

## Remarks

Attributes are string notes that have tag names and are not read-only.
Use
ISketchBlockInstance::GetAttributeValue
to get attribute's value, or use
ISketchBlockInstance::SetAttributeValue
to set an attribute's value.

## Examples

- Get Block Information (VBA) (Get_Block_Information_Example_VB.htm)

## See Also

- `ISketchBlockInstance.GetAttributeCount`
- `ISketchBlockInstance.IGetAttributes`