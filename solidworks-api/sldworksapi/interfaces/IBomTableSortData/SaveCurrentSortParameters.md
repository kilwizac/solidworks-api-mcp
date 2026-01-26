---
type: property
interface: IBomTableSortData
member: SaveCurrentSortParameters
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related: []
keywords:
  - savecurrentsortparameters
  - ibomtablesortdata
  - bom
  - table
  - sort
  - data
  - save
  - current
  - parameters
  - boolean
readonly: null
---

# IBomTableSortData.SaveCurrentSortParameters

Gets and sets whether to save the current sort settings in the BOM table in the drawing.

## Signature

```csharp
System.Boolean SaveCurrentSortParameters {get; set;}
```
## Parameters

None.

## Return Value

True to save the current sort settings in the BOM table, false to not

## Remarks

After setting this property to true, you must call
IBomTableAnnotation::Sort
to actually save the sort settings in the BOM table in the drawing. Thereafter, instead of setting all of the sorting parameters every time you instantiate a new IBomTableAnnotation for this table, you can simply call
IBomTableAnnotation::ApplySavedSortScheme
to re-sort the table using the sort settings saved in the BOM table.

## Examples

- IBomTableSortData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomTableSortData)