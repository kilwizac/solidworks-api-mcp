---
type: method
interface: IWeldSymbol
member: GetProcess
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.SetText
keywords:
  - getprocess
  - iweldsymbol
  - weld
  - symbol
  - process
  - boolean
---

# IWeldSymbol.GetProcess

Gets whether the indication of welding process flag is set on this weld symbol.

## Signature

```csharp
System.Boolean GetProcess()
```
## Parameters

None.

## Return Value

True if the indication of welding process flag is set, false if not

## Remarks

Get:
Text related to the indication of welding process using
IWeldSymbol::GetText
.
Flag that indicates whether a reference box exists around this text using
IWeldSymbol::GetProcessReference
.
Set all of the indication of welding process values (flag, text, and reference) using
IWeldSymbol::SetProcess
.

## Examples

- IWeldSymbol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldSymbol)

## See Also

- `IWeldSymbol.SetText`