---
type: method
interface: IRevisionTableAnnotation
member: GetAllCustomProperties
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IRevisionTableAnnotation.GetAllCustomPropertiesCount
  - IRevisionTableAnnotation.GetColumnCustomProperty
  - IRevisionTableAnnotation.IGetAllCustomProperties
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
  - getallcustomproperties
  - table
  - annotation
  - all
  - object
---

# IRevisionTableAnnotation.GetAllCustomProperties

Gets a list of available custom properties that can be used for a custom properties column in this revision table annotation.

## Signature

```csharp
System.Object GetAllCustomProperties()
```
## Parameters

None.

## Return Value

Array of strings of available custom properties

## Remarks

This method only works for SOLIDWORKS documents created or saved in SOLIDWORKS 2005 or later.
The list of available custom properties includes all of the items in the revision table, which includes items from the file summary items and file custom properties that have been set.

## See Also

- `IRevisionTableAnnotation.GetAllCustomPropertiesCount`
- `IRevisionTableAnnotation.GetColumnCustomProperty`
- `IRevisionTableAnnotation.IGetAllCustomProperties`
- `IRevisionTableAnnotation.SetColumnCustomProperty`