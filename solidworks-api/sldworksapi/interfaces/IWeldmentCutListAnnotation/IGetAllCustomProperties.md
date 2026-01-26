---
type: method
interface: IWeldmentCutListAnnotation
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
  - IWeldmentCutListAnnotation.GetAllCustomProperties
  - IWeldmentCutListAnnotation.GetColumnCustomProperty
  - IWeldmentCutListAnnotation.SetColumnCustomProperty
keywords:
  - igetallcustomproperties
  - iweldmentcutlistannotation
  - weldment
  - cut
  - list
  - annotation
  - all
  - custom
  - properties
  - count
  - int32
  - string
---

# IWeldmentCutListAnnotation.IGetAllCustomProperties

Gets the list of available custom properties that could be used for a custom properties column in this weldment cut list table annotation.

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

Before calling this method, call
IWeldmentCutListAnnotation::GetAllCustomPropertiesCount
to get Count.
The list of available custom properties includes all of the items in the weldment cut list table, which includes items from the file summary items and file custom properties that have been set.

## See Also

- `IWeldmentCutListAnnotation.GetAllCustomProperties`
- `IWeldmentCutListAnnotation.GetColumnCustomProperty`
- `IWeldmentCutListAnnotation.SetColumnCustomProperty`