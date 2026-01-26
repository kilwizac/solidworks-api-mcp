---
type: property
interface: IAdvancedHoleElementData
member: CalloutString
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - calloutstring
  - iadvancedholeelementdata
  - advanced
  - hole
  - element
  - data
  - callout
  - string
readonly: null
---

# IAdvancedHoleElementData.CalloutString

Gets or sets the hole callout string for this Advanced Hole element.

## Signature

```csharp
System.String CalloutString {get; set;}
```
## Parameters

None.

## Return Value

Hole callout string (see Remarks )

## Remarks

This property is valid only if
IAdvancedHoleFeatureData::CustomizeCallout
is set to true.
The hole callout string is formatted as follows:
<
LibraryName
-
SymbolName
> <
callout_var1
> <
callout_var2
>... <
callout_varn
>
where:
LibraryName
and
SymbolName
are defined in
c:\ProgramData\SolidWorks\SolidWorks 20
nn
\lang\english\gtol.sym
.
callout_var1-n
are callout variables. Use
IModelDocExtension::GetCalloutVariableString
to get the strings for hole callout variables defined in
swCalloutVariable_e
. You can also find the hole callout variable strings by clicking
Hole Callout > Callout Variables
in the Advanced Hole PropertyManager.
Note
: You must include the right- and left-angle brackets and the hyphens when setting the elements of this property string:
"<HOLE-SPOT><MOD-DIAM> <ah-cboredia> <HOLE-DEPTH> <ah-cboredepth><ah-cboreside>"

## Examples

- IAdvancedHoleElementData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedHoleElementData)