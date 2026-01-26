---
type: method
interface: IBomTableAnnotation
member: GetAllCustomPropertiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.GetAllCustomProperties
  - IBomTableAnnotation.SetColumnCustomProperty
keywords:
  - getallcustompropertiescount
  - ibomtableannotation
  - bom
  - table
  - annotation
  - all
  - custom
  - properties
  - count
  - int32
---

# IBomTableAnnotation.GetAllCustomPropertiesCount

Gets the number of items in the list of available custom properties that can be used for a custom properties column in this BOM table annotation.

## Signature

```csharp
System.Int32 GetAllCustomPropertiesCount()
```
## Parameters

None.

## Return Value

Number of available custom properties

## Remarks

Call this method before calling
IBomTableAnnotation::IGetAllCustomProperties
.
The list of possible custom properties includes all of the items in the BOM table, which includes items from the file summary items and file custom properties that have been set.

## See Also

- `IBomTableAnnotation.GetAllCustomProperties`
- `IBomTableAnnotation.SetColumnCustomProperty`