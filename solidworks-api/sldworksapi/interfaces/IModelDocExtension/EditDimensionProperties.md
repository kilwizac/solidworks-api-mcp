---
type: method
interface: IModelDocExtension
member: EditDimensionProperties
returns: System.Boolean
parameters:
  -
    name: TolType
    type: System.Int32
    description: Type of tolerance as defined in swTolType_e
  -
    name: TolMax
    type: System.Double
    description: Maximum value for the tolerance
  -
    name: TolMin
    type: System.Double
    description: Minimum value for the tolerance
  -
    name: TolMaxFit
    type: System.String
    description: Text for the maximum FIT value when using a fit tolerance type
  -
    name: TolMinFit
    type: System.String
    description: Text for the minimum FIT value when using a fit tolerance type
  -
    name: UseDocPrec
    type: System.Boolean
    description: True to use the document's precision value, false to use value specified for Precision
  -
    name: Precision
    type: System.Int32
    description: Precision to use for this dimension if UseDocPrec is false
  -
    name: ArrowsIn
    type: System.Int32
    description: Arrow direction as defined in swDimensionArrowsSide_e
  -
    name: UseDocArrows
    type: System.Boolean
    description: True to use the document's arrow types, false to use values specified for Arrow1 and Arrow2
  -
    name: Arrow1
    type: System.Int32
    description: Type of arrow to use for the first arrow of this dimension as defined in swArrowStyle_e if UseDocArrows is false
  -
    name: Arrow2
    type: System.Int32
    description: Type of arrow to use for the second arrow of this dimension as defined in swArrowStyle_e if UseDocArrows is false
  -
    name: PrefixText
    type: System.String
    description: Text to display before the dimension, but on the same line (see Remarks )
  -
    name: SuffixText
    type: System.String
    description: Text to display after the dimension, but on the same line (see Remarks )
  -
    name: ShowValue
    type: System.Boolean
    description: True to display the value of the dimension in the user interface, false to not
  -
    name: CalloutText1
    type: System.String
    description: Callout text to display above the dimension
  -
    name: CalloutText2
    type: System.String
    description: Callout text to display below the dimension
  -
    name: DimensionLowerText
    type: System.String
    description: Text to display below the dimension line; valid for display dimensions in drawings only
  -
    name: CenterText
    type: System.Boolean
    description: True to center the text in the dimension, false to not
  -
    name: ConfigOption
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: ConfigNames
    type: System.Object
    description: Names of the configurations to which to apply these edits (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IModelDocExtension.IEditDimensionProperties
keywords:
  - dimension
  - see
  - also
  - idimension
  - edit
  - editdimensionproperties
  - imodeldocextension
  - model
  - doc
  - extension
  - properties
  - tol
  - type
  - int32
  - max
  - double
  - min
  - fit
  - string
  - use
  - prec
  - boolean
  - precision
  - arrows
  - arrow1
  - arrow2
  - prefix
  - text
  - suffix
  - show
  - value
  - callout
  - text1
  - text2
  - lower
  - center
  - config
  - option
  - names
  - object
  - modify
  - vb
  - net
  - vba
---

# IModelDocExtension.EditDimensionProperties

Edits the selected dimension.

## Signature

```csharp
System.Boolean EditDimensionProperties( 
   System.Int32
TolType
,
   System.Double
TolMax
,
   System.Double
TolMin
,
   System.String
TolMaxFit
,
   System.String
TolMinFit
,
   System.Boolean
UseDocPrec
,
   System.Int32
Precision
,
   System.Int32
ArrowsIn
,
   System.Boolean
UseDocArrows
,
   System.Int32
Arrow1
,
   System.Int32
Arrow2
,
   System.String
PrefixText
,
   System.String
SuffixText
,
   System.Boolean
ShowValue
,
   System.String
CalloutText1
,
   System.String
CalloutText2
,
   System.String
DimensionLowerText
,
   System.Boolean
CenterText
,
   System.Int32
ConfigOption
,
   System.Object
ConfigNames
)
```
## Parameters

- `TolType` (System.Int32): Type of tolerance as defined in swTolType_e
- `TolMax` (System.Double): Maximum value for the tolerance
- `TolMin` (System.Double): Minimum value for the tolerance
- `TolMaxFit` (System.String): Text for the maximum FIT value when using a fit tolerance type
- `TolMinFit` (System.String): Text for the minimum FIT value when using a fit tolerance type
- `UseDocPrec` (System.Boolean): True to use the document's precision value, false to use value specified for Precision
- `Precision` (System.Int32): Precision to use for this dimension if UseDocPrec is false
- `ArrowsIn` (System.Int32): Arrow direction as defined in swDimensionArrowsSide_e
- `UseDocArrows` (System.Boolean): True to use the document's arrow types, false to use values specified for Arrow1 and Arrow2
- `Arrow1` (System.Int32): Type of arrow to use for the first arrow of this dimension as defined in swArrowStyle_e if UseDocArrows is false
- `Arrow2` (System.Int32): Type of arrow to use for the second arrow of this dimension as defined in swArrowStyle_e if UseDocArrows is false
- `PrefixText` (System.String): Text to display before the dimension, but on the same line (see Remarks )
- `SuffixText` (System.String): Text to display after the dimension, but on the same line (see Remarks )
- `ShowValue` (System.Boolean): True to display the value of the dimension in the user interface, false to not
- `CalloutText1` (System.String): Callout text to display above the dimension
- `CalloutText2` (System.String): Callout text to display below the dimension
- `DimensionLowerText` (System.String): Text to display below the dimension line; valid for display dimensions in drawings only
- `CenterText` (System.Boolean): True to center the text in the dimension, false to not
- `ConfigOption` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `ConfigNames` (System.Object): Names of the configurations to which to apply these edits (see Remarks )

## Return Value

True if the dimension is modified, false if not

## Remarks

PrefixText and SuffixText must not include "/r/n".
This method:
always changes the dimension's parameters in the active configuration. For example, if you specify swInConfigurationOpts_e.swSpecifyConfiguration for ConfigOption and do not specify the name of the active configuration in ConfigNames, then the dimension parameters in the active configuration are affected.
does not support
hole callouts
.

## Examples

- Modify Dimension Properties (C#) (Modify_Dimension_Properties_Example_CSharp.htm)
- Modify Dimension Properties (VB.NET) (Modify_Dimension_Properties_Example_VBNET.htm)
- Modify Dimension Properties (VBA) (Modify_Dimension_Properties_Example_VB.htm)

## See Also

- `IModelDocExtension.IEditDimensionProperties`