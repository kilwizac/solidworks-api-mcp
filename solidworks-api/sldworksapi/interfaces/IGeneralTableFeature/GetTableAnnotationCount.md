---
type: method
interface: IGeneralTableFeature
member: GetTableAnnotationCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - features
related:
  - IGeneralTableFeature.GetTableAnnotations
keywords:
  - table
  - annotations
  - see
  - also
  - itableannotation
  - general
  - tables
  - gettableannotationcount
  - igeneraltablefeature
  - feature
  - annotation
  - count
  - int32
  - hide
  - show
  - row
  - vba
  - vb
  - net
---

# IGeneralTableFeature.GetTableAnnotationCount

Gets the number of table annotations for this general table feature.

## Signature

```csharp
System.Int32 GetTableAnnotationCount()
```
## Parameters

None.

## Return Value

Number of table annotations

## Remarks

Call this method before calling
IGeneralTableFeature::IGetTableAnnotations
to get the size of the array.

## Examples

- Hide and Show Row (VBA) (Hide_and_Show_Row_Example_VB.htm)
- Get General Table Feature (C#) (Get_General_Table_Feature_Example_CSharp.htm)
- Get General Table Feature (VB.NET) (Get_General_Table_Feature_Example_VBNET.htm)
- Get General Table Feature (VBA) (Get_General_Table_Feature_Example_VB.htm)

## See Also

- `IGeneralTableFeature.GetTableAnnotations`