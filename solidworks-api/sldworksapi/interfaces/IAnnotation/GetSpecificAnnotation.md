---
type: method
interface: IAnnotation
member: GetSpecificAnnotation
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.IGetSpecificAnnotation
  - ICThread
  - ICenterLine
  - ICenterMark
  - IDatumOrigin
  - IDatumTag
  - IDatumTargetSym
  - IDisplayDimension
  - IDowelSymbol
  - IGtol
  - IMultiJogLeader
  - INote
  - ISFSymbol
  - ITableAnnotation
  - IWeldBead
  - IWeldSymbol
keywords:
  - getspecificannotation
  - iannotation
  - annotation
  - specific
  - object
  - display
  - dimensions
  - gtols
  - surface
  - finish
  - symbols
  - vba
  - dimxpert
  - feature
  - vb
  - net
---

# IAnnotation.GetSpecificAnnotation

Gets the specific underlying object associated with this annotation.

## Signature

```csharp
System.Object GetSpecificAnnotation()
```
## Parameters

None.

## Return Value

Specific object underlying this annotation or null (see Remarks )

## Remarks

If this annotation contains only Product and Manufacturing Information (PMI), then this method returns null. In that case, use
IAnnotation::GetPMIType
and
IAnnotation::GetPMIData
to obtain the PMI data associated with this annotation.
If this annotation is a note, then this method returns the underlying
INote
.
Dispatch applications can use
IAnnotation::GetType
to determine the type of underlying object supported. For example, if the return value from IAnnotation::GetType is swWeldSymbol, then you know that you can use the Dispatch pointer returned from this method with the
IWeldSymbol
class.
COM applications can also use IAnnotation::GetType to determine the underlying object supported. Or, COM applications can use QueryInterface to determine which object is supported and get the interface from the LPUNKNOWN return value.

## Examples

- Get Display Dimensions, GTols, and Surface-finish Symbols (VBA) (Get_Display_Dimensions,_Gtols,_and_Surface-Finish_Symbols_Example_VB.htm)
- Get DimXpert Display Dimensions and Feature (C#) (Get_DimXpert_Display_Dimensions_and_Feature_Example_CSharp.htm)
- Get DimXpert Display Dimensions and Feature (VB.NET) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VBNET.htm)
- Get DimXpert Display Dimensions and Feature (VBA) (Get_DimXpert_Display_Dimensions_and_Feature_Example_VB.htm)

## See Also

- `IAnnotation.IGetSpecificAnnotation`
- `ICThread`
- `ICenterLine`
- `ICenterMark`
- `IDatumOrigin`
- `IDatumTag`
- `IDatumTargetSym`
- `IDisplayDimension`
- `IDowelSymbol`
- `IGtol`
- `IMultiJogLeader`
- `INote`
- `ISFSymbol`
- `ITableAnnotation`
- `IWeldBead`
- `IWeldSymbol`