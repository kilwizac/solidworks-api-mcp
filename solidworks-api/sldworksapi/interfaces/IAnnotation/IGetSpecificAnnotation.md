---
type: method
interface: IAnnotation
member: IGetSpecificAnnotation
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetSpecificAnnotation
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
  - igetspecificannotation
  - iannotation
  - annotation
  - specific
  - object
---

# IAnnotation.IGetSpecificAnnotation

Gets the specific underlying object associated with this annotation.

## Signature

```csharp
System.Object IGetSpecificAnnotation()
```
## Parameters

None.

## Return Value

Pointer to the IUnknown interface for the specific underlying annotation

## Remarks

If this annotation is a note, then this method returns the underlying
INote
.
Dispatch applications can use
IAnnotation::GetType
to determine the type of underlying object supported. For example, if the return value from IAnnotation::GetType is swWeldSymbol, then you know that you can use the Dispatch pointer returned from this method with the
IWeldSymbol
class.
COM applications can also use IAnnotation::GetType to determine the underlying object supported. Or, COM applications can use QueryInterface to determine which object is supported and get the interface from the LPUNKNOWN return value.

## See Also

- `IAnnotation.GetSpecificAnnotation`
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