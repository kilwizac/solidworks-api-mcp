---
type: method
interface: IRevisionTableAnnotation
member: IGetAllCustomProperties
returns: System.String
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of available custom properties
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
  - igetallcustomproperties
  - table
  - annotation
  - all
  - count
  - int32
  - string
---

# IRevisionTableAnnotation.IGetAllCustomProperties

Gets a list of available custom properties that can be used for a custom properties column in this revision table annotation.

## Signature

```csharp
System.String IGetAllCustomProperties( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of available custom properties

## Return Value

in-process, unmanaged C++: Pointer to an array of strings of available custom properties VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method only works for SOLIDWORKS documents created or saved in SOLIDWORKS 2005 or later.
Before calling this method, call
IRevisionTableAnnotation::GetAllCustomPropertiesCount
to get the number of available custom properties.
The list of available custom properties includes all of the items in the revision table, which includes items from the file summary items and file custom properties that have been set.

## See Also

- `IRevisionTableAnnotation.GetAllCustomProperties`
- `IRevisionTableAnnotation.GetColumnCustomProperty`
- `IRevisionTableAnnotation.SetColumnCustomProperty`