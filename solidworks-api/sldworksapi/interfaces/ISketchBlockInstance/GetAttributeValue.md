---
type: method
interface: ISketchBlockInstance
member: GetAttributeValue
returns: System.String
parameters:
  -
    name: TagName
    type: System.String
    description: Tag name of this attribute
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockInstance.GetAttributeCount
  - ISketchBlockInstance.GetAttributes
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
  - getattributevalue
  - sketch
  - block
  - instance
  - value
  - tag
  - name
  - string
---

# ISketchBlockInstance.GetAttributeValue

Gets the value of the specified attribute for this block instance.

## Signature

```csharp
System.String GetAttributeValue( 
   System.String
TagName
)
```
## Parameters

- `TagName` (System.String): Tag name of this attribute

## Return Value

Value of this attribute

## Remarks

Attributes are notes that have tag names and are not read-only.
Use
ISketchBlockInstance::SetAttributeValue
to set an attribute.

## See Also

- `ISketchBlockInstance.GetAttributeCount`
- `ISketchBlockInstance.GetAttributes`
- `ISketchBlockInstance.IGetAttributes`