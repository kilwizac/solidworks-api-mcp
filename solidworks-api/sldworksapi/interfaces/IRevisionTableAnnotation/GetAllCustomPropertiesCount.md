---
type: method
interface: IRevisionTableAnnotation
member: GetAllCustomPropertiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IRevisionTableAnnotation.GetAllCustomProperties
  - IRevisionTableAnnotation.GetColumnCustomProperty
  - IRevisionTableAnnotation.SetColumnCustomProperty
keywords:
  - custom
  - properties
  - see
  - also
  - icustompropertymanager
  - revision
  - tables
  - irevisiontableannotation
  - irevisiontablefeature
  - interfaces
  - getallcustompropertiescount
  - table
  - annotation
  - all
  - count
  - int32
---

# IRevisionTableAnnotation.GetAllCustomPropertiesCount

Gets the number of items in the list of available custom properties that can be used for a custom properties column in this revision table annotation.

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
IRevisionTableAnnotation::IGetAllCustomProperties
to get the value of Count.
The list of available custom properties includes all of the items in the revision table, which includes items from the file summary items and file custom properties that have been set.

## See Also

- `IRevisionTableAnnotation.GetAllCustomProperties`
- `IRevisionTableAnnotation.GetColumnCustomProperty`
- `IRevisionTableAnnotation.SetColumnCustomProperty`